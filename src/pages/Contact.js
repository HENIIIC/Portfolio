import React from 'react'

function Contact() {
  const contactInformations = {
    email: 'heni.rjab.1999@gmail.com' ,
    phoneNumber : '+216 24 582 712',
    address : {
      city : 'Sfax',
      country : 'Tunisia',
      street : 'route sidi mansour klm 5',
      postalCode : 3011 ,
    }
  }
  return (
    <div>
      <p> <i class="bi bi-envelope"></i>  {contactInformations.email} </p>
      <p> <i class="bi bi-telephone"></i> {contactInformations.phoneNumber} </p>
      <p> <i class="bi bi-geo-alt"></i> {contactInformations.address.street} ; {contactInformations.address.postalCode} {contactInformations.address.city} ; {contactInformations.address.country} </p>
    </div>
  )
}

export default Contact