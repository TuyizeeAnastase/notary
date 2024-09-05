import {Service,HouseRentalAgreement,SalesMarketingAgreement,LegalAssistanceAgreement} from '../database/models'

export const getAllServices=async()=>{
    const services=await Service.findAndCountAll({
        include:[
            {
              model: HouseRentalAgreement,
              as:'service' 
            },
            {
                model: SalesMarketingAgreement,
                as:'service_marketing' 
              },
              {
                model: LegalAssistanceAgreement,
                as:'service_legal' 
              }
        ]
    })
    return services
}