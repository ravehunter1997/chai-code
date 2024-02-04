export const asyncHandler = async (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => {
      next(err);
    });
  };
};

// export const asyncHandler = (fn) => async(req,res,next)=>{
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         console.log(`Error : ${err.message}`)
//         res.status(err.code || 500).json({
//             success: false,
//             error: err.message || 'Server Error'
//         })
//     }
// }
