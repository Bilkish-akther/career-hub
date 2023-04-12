import React from 'react';


const Footer = () => {
    return (
        <div className=' bg-black text-slate-300   mt-8 text-left' >


            <div class="grid grid-cols-5 gap-10 mx-16 p-8">
                <div>
                    <h2 className='font-bold text-xl'>EmployNet</h2>
                    <p>There are many variations of passages
                         of Lorem Ipsum , but the majority have
                         suffered alteration in some form.  </p>
            
                </div>



                <div>
                    <h2>Company</h2>
                    <p>About Us <br /> Work <br /> Latest News <br /> Careers</p>
                </div>



                <div>
                    <h2>Product</h2>
                    <p>Prototype <br />Plans & Pricing <br />Customers <br />Integrations</p>
                </div>



                <div>
                    <h2>Support</h2>
                    <p>Help Desk <br />Sales <br />Become a Partner <br />Developers</p>
                </div>



                <div>
                    <h2>Contact</h2>
                    <p>524 Broadway , NYC <br />+1 777 - 978 - 5570</p>


                </div>
            </div>

            <hr />
            <div className='flex text-center ms-96 mb-4'>

                <p className='mx-12'>@2023 Job Finder. All Rights Reserved</p>
                

            </div>
        </div>
    );
};

export default Footer;
