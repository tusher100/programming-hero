import  {  type Request, type Response,  type NextFunction,} from "express";

const auth = (req: Request, res: Response, next: NextFunction)=>{
    //console.log("protected");

    const token = req.headers.authorization;
    if(!token){
        res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
    }
    next();
}

export default auth