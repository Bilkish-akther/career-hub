import React from 'react';


const Footer = () => {
    return (
        <div className=' bg-black  mt-8 text-left' >


            <div class="grid grid-cols-5 gap-10 mx-16 ">
                <div>
                    <h2 className='font-bold text-2xl text-slate-300'>EmployNet</h2>
                    <p className='text-gray-500'>There are many variations of passages
                         of Lorem Ipsum , but the majority have
                         suffered alteration in some form.  </p>
            
                </div>



                <div>
                    <h2 className='text-slate-300 text-lg'>Company</h2>
                    <p className='text-gray-500'>About Us <br /> Work <br /> Latest News <br /> Careers</p>
                </div>



                <div>
                    <h2 className='text-slate-300 text-lg'>Product</h2>
                    <p className='text-gray-500'>Prototype <br />Plans & Pricing <br />Customers <br />Integrations</p>
                </div>



                <div>
                    <h2 className='text-slate-300 text-lg'>Support</h2>
                    <p className='text-gray-500'>Help Desk <br />Sales <br />Become a Partner <br />Developers</p>
                </div>



                <div>
                    <h2 className='text-slate-300 text-lg'>Contact</h2>
                    <p className='text-gray-500'>524 Broadway , NYC <br />+1 777 - 978 - 5570</p>


                </div>
            </div>

            <hr />
            <div className='flex  ms-96 '>

                <p className=' text-gray-500'>@2023 CareerHub. All Rights Reserved</p>
                

            </div>
        </div>
    );
};

export default Footer;
