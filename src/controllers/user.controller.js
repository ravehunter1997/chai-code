import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import {User} from "../models/user.model.js";
import { ApiResponse } from "../utils/apiResponse.js";

const registerUser = asyncHandler(async (req, res) => {

  // get user details from frontend
    // validation - not empty
    // check if user already exists: username, email
    // check for images, check for avatar
    // upload them to cloudinary, avatar
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return res

    const { fullName,email,password,username } = req.body

    if ([fullName,email,password,username].some(field => field.trim() === "")) {
        throw new ApiError(400,"All fields are mandatory.")
    }

    const existedUser = await User.findOne({
        $or:[{email}, {username}]
    })
    if(existedUser) {
        throw new ApiError(409,"User wit same email or username already registered.")
    }
 
   const avatarLocalFilePath =  req.files?.avatar[0]?.path
   const coverImageLocalFilePath =  req.files?.coverImage[0]?.path

   if (!avatarLocalFilePath) {
    throw new ApiError(400,"Avatar is required")
   }

   const avatar = await uploadOnCloudinary(avatarLocalFilePath)
   const coverImage = await uploadOnCloudinary(coverImageLocalFilePath)
   
   if(!avatar){
    throw new ApiError(400,"Avatar is required")
   }

   const user = await User.create({
    fullName,
    email,
    avatar :  avatar.url,
    password,
    coverImage : coverImage.url || "",
    username
   })

   const createdUser = await User.findById(user._id).select("-password -refreshToken")

   if(!createdUser){
    throw new ApiError(500,"Something went wrong while creating user.")
   }

   return res.status(202).json(
    new ApiResponse(200,createdUser,"User created successfully.")
   )
});

export {registerUser}