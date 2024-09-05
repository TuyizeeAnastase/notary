import { createHouseRentalAgreement,createSalesMarketingAgreement,createLegalAssistanceAgreement } from "../services/service";

export class BookingControllers{
    async book(req,res){
        try{
            const {serviceType,bookingDetails}=req.body;
            let newBooking;
            switch(serviceType){
                case 'House Rental Agreement':
                    newBooking=await createHouseRentalAgreement({
                        tenantId: bookingDetails.tenantId,
                        landlordId: bookingDetails.landlordId,
                        date: bookingDetails.date,
                        name:serviceType,
                        cost: bookingDetails.cost,
                        serviceId: bookingDetails.serviceId,
                        ibindi: bookingDetails.ibindi,
                    });
                    break;

                    case 'Sales Marketing Agreement':
                        newBooking=await createSalesMarketingAgreement({
                            date: bookingDetails.date,
                            tin: bookingDetails.tin,
                            company_id: bookingDetails.company_id,
                            serviceId: bookingDetails.serviceId,
                            representative_id: bookingDetails.representative_id,
                            yearsOfAgreement: bookingDetails.yearsOfAgreement,
                            grossSalesRevenues: bookingDetails.grossSalesRevenues,
                            witness_one: bookingDetails.witness_one,
                            name:serviceType,
                            witness_two: bookingDetails.witness_two,
                        });
                        break;

                    case 'Legal Assistance Agreement':
                        newBooking=await createLegalAssistanceAgreement({
                            requesterId: bookingDetails.requesterId,
                            receiverId: bookingDetails.receiverId,
                            ikirego: bookingDetails.ikirego,
                            cost: bookingDetails.cost,
                            serviceId: bookingDetails.serviceId,
                        });
                        break;
                       
                        default:
                            return res.status(400).json({ message: 'Invalid service type' });
            }
            res.status(201).json({ message: 'Booking created successfully', booking: newBooking });
        }catch (error) {
            res.status(500).json({ message: 'Error creating booking', error });
          }
    }
}

const bookingController=new BookingControllers();
export default bookingController;