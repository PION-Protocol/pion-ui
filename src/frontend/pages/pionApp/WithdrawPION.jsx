import React, { useEffect, useState } from 'react'
import { useAccount, useContractWrite } from 'wagmi'
import isEmpty from 'lodash.isempty';
import abi from "../../../contracts/liquidity_abi.json"
import toast, { Toaster } from 'react-hot-toast';

const WithdrawPION = () => {
    const [withdrawalAmount, setWithdrawalAmount] = useState(0);
    const [walletAddress, setWalletAddress] = useState(undefined);
    const account = useAccount();

    const {
        data: withdrawalData,
        isSuccess: isWithdrawSuccessful,
        write: withdrawalWrite,
        isError: isWithdrawError,
        error: withdrawalError,
    } = useContractWrite({
        address: process.env.REACT_APP_LIQUIDITY_CONTRACT_ADDRESS,
        abi: abi,
        functionName: 'withdraw',
    });

    useEffect(() => {
        if (isWithdrawSuccessful) {
            toast.success("Withdrawal successful!");
            toast.success(<span>Verify your transaction on {' '} 
                <a
                    href={`${process.env.REACT_APP_POLYGONSCAN_URL}/tx/${withdrawalData.hash}`}
                    target="_blank"
                    rel="noreferrer"
                    class="text-blue-500 hover:text-blue-800"
                >
                    {`${process.env.REACT_APP_POLYGONSCAN_URL}/tx/${withdrawalData.hash}`}
                </a>
                </span>
            )
        }
    }, [isWithdrawSuccessful, withdrawalData]);

    useEffect(() => {
        if (isWithdrawError) {
            if (withdrawalError.shortMessage)
                toast.error(`Withdrawal failed. ${withdrawalError.shortMessage}`);
            else
                toast.error(`Withdrawal failed. ${withdrawalError.message}`);
        }
    }, [isWithdrawError, withdrawalError]);

    useEffect(() => {
        if (!isEmpty(account)) {
            setWalletAddress(account?.address);
        }
    }, [account]);

    const withdrawPION = async () => {
        if (isEmpty(walletAddress) || walletAddress === undefined) {
            toast.error("Please connect your wallet");
        }
        else if (withdrawalAmount <= 0) {
            toast.error("Please enter a valid amount to stake");
        }
        else {
            withdrawalWrite({
                args: [withdrawalAmount],
                from: walletAddress,
            });
        }
    }

  return (
    <>
    <Toaster />
    <div className="w-full flex items-center bg-gradient-to-tr from-gray-800 via-zinc-800 to-zinc-700 pb-10 md:pb-20 select-none lg:pt-32 md:pt-28 justify-center h-dvh min-h-[600px]">
        <div className='flex flex-col relative z-10 2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl lg:px-0 px-8 mx-auto w-full py-5 max-lg:flex-wrap'>
            <div className="xl:w-2/5 lg:w-3/6 p-8 border-2 border-gray-500 rounded-2xl mx-auto shadow-lg shadow-gray-700 bg-gradient-to-tr from-gray-800 via-zinc-800 to-gray-700">
                <div className="font-bold xl:text-3xl lg:text-2xl text-xl text-balance backdrop-blur-sm text-white text-center">
                    Withdraw your PION tokens
                </div>
                <div className='py-10 relative text-center'>
                    <div className="relative md:w-2/3 mx-auto">
                        <input
                            type="number"
                            id="floating_filled"
                            class="block text-center rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                            placeholder=" "
                            value={withdrawalAmount}
                            min={0}
                            onChange={(e) => setWithdrawalAmount(e.target.value)}
                        />
                        <label for="floating_filled" class="absolute left-0 text-sm text-gray-300 duration-300 w-full -translate-y-4 scale-75 top-4 z-10 peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                            PION tokens
                        </label>
                    </div>
                </div>
                <button
                    className='md:w-2/3 text-center lg:py-3 py-2 lg:px-5 px-3 bg-gradient-to-br from-gray-600 via-gray-600 to-gray-900 rounded-lg text-sm lg:text-base shadow-md text-white ring-2 ring-inset ring-transparent md:hover:-translate-y-1 block duration-300 font-bold mx-auto'
                    onClick={() => withdrawPION()}
                >
                    Withdraw
                </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default WithdrawPION;
