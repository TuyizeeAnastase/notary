import joi from "joi"

export const userValidation=async(req,res,next)=>{
    const userShema=joi.object({
        name:joi.string().required().messages({
            "any.required":"Name are required"
        }),
        nid:joi.string().string().required().messages({
            "any.required":"NID is required"
        }),
        telephone:joi.string().required().messages({
            "any.required":"Telephone is required"
        }),
        email:joi.email().required().messages({
            "any.required":"EMail is required"
        }),
        residence:joi.string().required().messages({
            "any.messages":"Residence is required"
        }),
        provinceId:joi.number().integer().required().messages({
            "any.required":"Province is required"
        }),
        districtId:joi.number().integer().required().messages({
            "any.required":"District is required"
        }),
        sectorId:joi.number().integer().required().messages({
            "any.messages":"Sector is required"
        }),
        cellId:joi.number().integer().required().messages({
            "any.required":"Cell is required"
        })
    });
    const value=await userShema.validate(req.body);
    if(value.error){
        res.status(404).json({
            message:value.error.details[0].message.replace(/["'`]+/g,""),
        });
        return false;
    }
    next();
}