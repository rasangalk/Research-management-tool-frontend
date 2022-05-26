import React from "react";
import Menu from "../../../components/AdminMenu";
import Container from "../../../components/AdminContainer";

function PannelView() {
	return (
		<div>
			<div className='w-screen h-screen grid grid-cols-12 bg-bk-white'>
				<div className=''>
					<Menu />
				</div>
				<div className='col-span-11 mx-auto my-auto '>
					<div class='relative'>
						<Container title='panel' width='w-[68rem]' />
						<div class='absolute left-[5rem] top-[9rem] w-[66rem]'>
							<div className='grid grid-cols-4 overflow-auto h-[20rem]'>
								<div className='col-span-4'>
									<p className='capitalize'>
										panel <span className='uppercase'>id:</span>
									</p>
									<p className='uppercase font-bold text-lg'>p001</p>
								</div>
								<div className=''>
									<p className='capitalize'>
										member <span className='uppercase'>id:</span>
									</p>
									<p className='uppercase font-bold text-lg'>emp45678</p>
								</div>
								<div className='col-span-2'>
									<p className='capitalize'>member name:</p>
									<p className='capitalize font-bold text-lg'>
										kushnara sooriyawansha
									</p>
								</div>
								<div className=''>
									<p className='capitalize'>username:</p>
									<p className='normal-case font-bold text-lg'>kushnara.s</p>
								</div>
								<div className=''>
									<p className='capitalize'>
										member <span className='uppercase'>id:</span>
									</p>
									<p className='uppercase font-bold text-lg'>emp45678</p>
								</div>
								<div className='col-span-2'>
									<p className='capitalize'>member name:</p>
									<p className='capitalize font-bold text-lg'>
										kushnara sooriyawansha
									</p>
								</div>
								<div className=''>
									<p className='capitalize'>username:</p>
									<p className='normal-case font-bold text-lg'>kushnara.s</p>
								</div>
								<div className=''>
									<p className='capitalize'>
										member <span className='uppercase'>id:</span>
									</p>
									<p className='uppercase font-bold text-lg'>emp45678</p>
								</div>
								<div className='col-span-2'>
									<p className='capitalize'>member name:</p>
									<p className='capitalize font-bold text-lg'>
										kushnara sooriyawansha
									</p>
								</div>
								<div className=''>
									<p className='capitalize'>username:</p>
									<p className='normal-case font-bold text-lg'>kushnara.s</p>
								</div>
							</div>

							<button className='mt-16 capitalize text-lg font-bold px-8 py-1 bg-regal-blue text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-50 sm:w-50 rounded-md hover:bg-regal-blue-active float-right text-sm'>
								edit
							</button>
							<button className='mr-4 mt-16 capitalize text-lg font-bold px-6 py-1 bg-main-orange text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-50 sm:w-50 rounded-md hover:bg-main-orange-active float-right text-sm'>
								delete
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PannelView;