import React from 'react'
import card1 from '../../assets/images/card1.png'
import card2 from '../../assets/images/Left_hand.png'
import card3 from '../../assets/images/card1 (1).png'
import card4 from '../../assets/images/Speech_bubble.png'


export const Blog = () => {
  return (
    <div className=''>
        <div className='items-center mt-20'>
            <h1 className='text-3xl font-bold text-center'>How We Works ?</h1>
            <p className='text-center mt-10'>
                This is a process how you can apply and get loan for your self.    
            </p>
        </div>
        <div className='items-center mt-40 ml-30'>
            <div className='flex flex-col lg:flex-row justify-center items-center gap-20 mt-10 mb-30'>
                <img src={card1} alt="first card to apply" className=''/>
                <div className='items-center'>
                    <h1 className='text-2xl font-bold mb-10'>Application</h1>
                    <p className='text-center font-semibold text-1xl w-140'>
                        The borrower submits a loan application to the bank, 
                        either in person, online, or through other channels. 
                        The application includes personal and financial information,
                        such as income, employment history, credit score, and the purpose
                        of the loan.
                    </p>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row justify-center items-center gap-20 mt-10 mb-30'>
                <div className='items-center'>
                    <h1 className='text-2xl font-bold mb-10 w-120'>Documentation and verification</h1>
                    <p className='text-center font-semibold text-1xl w-140'>
                        The bank requests supporting documents from the borrower, 
                        such as identification proof, income statements, bank statements,
                        and collateral details (if applicable). The bank verifies the 
                        information provided to assess the borrower's creditworthiness 
                        and eligibility for the loan.
                    </p>
                </div>
                <img src={card2} alt="second card to apply" className=''/>
            </div>
            <div className='flex flex-col lg:flex-row justify-center items-center gap-20 mt-10 mb-30'>
                <img src={card3} alt="third card to apply" className=''/>
                <div className='items-center'>
                    <h1 className='text-2xl font-bold mb-10 '>Credit Assessment</h1>
                    <p className='text-center font-semibold text-1xl w-140'>
                        The bank conducts a credit assessment to evaluate the borrower's 
                        creditworthiness and ability to repay the loan. This process involves
                        analyzing the borrower's credit history, income stability, debt-to-income
                        ratio, and other factors.
                    </p>
                </div>
            </div>
             <div className='flex flex-col lg:flex-row justify-center items-center gap-20 mt-10 mb-30'>
                <div className='items-center'>
                    <h1 className='text-2xl font-bold mb-10 w-120'>Loan Approval</h1>
                    <p className='text-center font-semibold text-1xl w-140'>
                        If the borrower meets the bank's lending criteria and passes
                        the credit assessment, the loan is approved. The bank determines
                        the loan amount, interest rate, repayment term, and any associated
                        fees.
                    </p>
                </div>
                <img src={card4} alt="fourth card to apply" className=''/>
            </div>
        </div>
    </div>
  )
}
