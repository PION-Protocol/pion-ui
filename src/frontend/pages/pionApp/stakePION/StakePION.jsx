/* global BigInt */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAccount, useContractWrite } from 'wagmi';
import isEmpty from 'lodash.isempty';
import liquidity_abi from "../../../../contracts/liquidity_abi.json";
import pionTokenAbi from "../../../../contracts/pion_token_abi.json";
import toast, { Toaster } from 'react-hot-toast';

const StakePION = () => {
    const [stakedTokenValue, setStakedTokenValue] = useState(0);
    const [walletAddress, setWalletAddress] = useState(undefined);
    const account = useAccount();
    const navigate = useNavigate();

    const {
        isSuccess: approvalSuccess,
        isError: isApprovalError,
        error: approvalError,
        write: approvalWrite,
    } = useContractWrite({
        address: process.env.REACT_APP_PION_TOKEN_CONTRACT_ADDRESS,
        abi: pionTokenAbi,
        functionName: 'approve',
    });

    const {
        data: supplyData,
        isSuccess: isSupplySuccessful,
        isError: isSupplyError,
        error: supplyError,
        write: supplyWrite
    } = useContractWrite({
        address: process.env.REACT_APP_LIQUIDITY_CONTRACT_ADDRESS,
        abi: liquidity_abi,
        functionName: 'supply',
    });

    useEffect(() => {
        if (isSupplySuccessful) {
            toast.success("Staking successful!");
            toast.custom(
                <div class="bg-white p-4 rounded-lg shadow-md flex align-items-center">
                    <span>Verify your transaction on {' '} <br />
                    <a
                        href={`${process.env.REACT_APP_POLYGONSCAN_URL}/tx/${supplyData.hash}}`}
                        target="_blank"
                        rel="noreferrer"
                        class="text-blue-500 hover:text-blue-800"
                    >
                        {`${process.env.REACT_APP_POLYGONSCAN_URL}/tx/${supplyData.hash}}`}
                    </a>
                    </span>
                </div>
            )
            setTimeout(() => {
                navigate('/account');
            }, 5000);
        }
    }, [isSupplySuccessful, supplyData]);

    useEffect(() => {
        if (isSupplyError) {
            console.log("Supply error occured");
            console.dir(supplyError, { depth: null });
            if (supplyError?.shortMessage)
                toast.error(`There was an error in the supply.\n ${supplyError.shortMessage}`);
            else
                toast.error(`There was an error in the supply.\n ${supplyError.message}`);
        }
    }, [isSupplyError, supplyError]);

    useEffect(() => {
        if (isApprovalError) {
            console.log("Approval error occured");
            console.dir(approvalError, { depth: null });
            if (approvalError?.shortMessage)
                toast.error(`There was an error in the approval. ${approvalError.shortMessage}`);
            else
                toast.error(`There was an error in the approval. ${approvalError.message}`);
        }
    }, [isApprovalError, approvalError]);

    useEffect(() => {
        if (!isEmpty(account)) {
            setWalletAddress(account?.address);
        }
    }, [account]);

    useEffect(() => {
        if (approvalSuccess) {
            toast.success("Contract is approved");
            supplyWrite({
                args: [stakedTokenValue],
                from: walletAddress,
            });
        }
    }, [approvalSuccess, walletAddress, stakedTokenValue]);

    const approvePION = () => {
        if (isEmpty(walletAddress) || walletAddress === undefined) {
            toast.error("Please connect your wallet");
        }
        else if (stakedTokenValue <= 0) {
            toast.error("Please enter a valid amount to stake");
        }
        else {
            approvalWrite({
                args: [process.env.REACT_APP_LIQUIDITY_CONTRACT_ADDRESS,
                    BigInt(10000000000000000000000000000000000000)],
                from: "0x8648d3351a06B03e039Cd0818379F1717BCDd6B2"
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
                    Stake PION today and start earning rewards weekly
                </div>
                <div className='py-10 relative text-center'>
                    <div className="relative md:w-2/3 mx-auto">
                        <input
                            type="number"
                            id="floating_filled"
                            class="block text-center rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                            placeholder=" "
                            value={stakedTokenValue}
                            min={0}
                            onChange={(e) => setStakedTokenValue(e.target.value)}
                        />
                        <label for="floating_filled" class="absolute left-0 text-sm text-gray-300 duration-300 w-full -translate-y-4 scale-75 top-4 z-10 peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Staking Amount (in PION)</label>
                    </div>
                </div>
                <button
                    className='md:w-2/3 text-center lg:py-3 py-2 lg:px-5 px-3 bg-gradient-to-br from-gray-600 via-gray-600 to-gray-900 rounded-lg text-sm lg:text-base shadow-md text-white ring-2 ring-inset ring-transparent md:hover:-translate-y-1 block duration-300 font-bold mx-auto'
                    onClick={() => approvePION()}
                >
                    Stake Now
                </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default StakePION
