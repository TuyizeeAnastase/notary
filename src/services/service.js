import {HouseRentalAgreement ,LegalAssistanceAgreement ,SalesMarketingAgreement} from '../database/models'

export const createHouseRentalAgreement=async(request)=>{
    return await HouseRentalAgreement.create(request)
}

export const createLegalAssistanceAgreement=async(request)=>{
    return await LegalAssistanceAgreement.create(request)
}

export const createSalesMarketingAgreement=async(request)=>{
    return await SalesMarketingAgreement.create(request)
}
