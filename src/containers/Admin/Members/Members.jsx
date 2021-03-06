import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllMemebrs } from "../../../actions/members.action";
import Menu from "../../../components/AdminMenu";
import tt from "../../../images/upload.png";
import { useNavigate } from "react-router-dom";
function Members() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const members = useSelector(state => state.members);
	console.log(members);
	useEffect(() => {
		dispatch(getAllMemebrs());
	}, []);
	return (
		<div>
			<div className='w-screen h-screen grid grid-cols-12 bg-bk-white'>
				<div className=''>
					<Menu status='members' />
				</div>
				<div className='col-span-11  '>
					<div className='grid grid-rows-6 h-full w-full'>
						<div className='flex items-center gap-8'>
							<div className='2xl:ml-[71rem] ml-[66rem]'>
								<button className='font-bold text-lg  px-6 py-1 bg-regal-blue text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-50 sm:w-50 rounded-md hover:bg-regal-blue-active float-right  text-sm'>
									<Link to='/admin/member/create'>Add Member</Link>
								</button>
							</div>
						</div>
						<div className='row-span-5 mx-auto bg-white w-[70.5rem] drop-shadow-xl rounded-xl mt-0 h-[33rem]'>
							<h2 className='text-xl font-bold ml-5 pt-2'>Members</h2>
							<div className='overflow-auto h-[25rem] mx-12 mt-5'>
								<table className='border-collapse w-full '>
									<thead>
										<tr>
											<th className='py-2 px-2 uppercase bg-white text-left sticky top-0 z-1'>
												name
											</th>
											<th className='py-2 px-2 uppercase bg-white text-left sticky top-0 z-1'>
												id
											</th>
											<th className='py-2 px-2 uppercase bg-white text-left sticky top-0 z-1'>
												email
											</th>
											<th className='py-2 px-2 uppercase bg-white text-left sticky top-0 z-1'>
												phone
											</th>
											<th className='py-2 px-2 uppercase bg-white text-left sticky top-0 z-1'>
												role
											</th>
										</tr>
									</thead>
									<tbody>
										{members.members.length > 0
											? members.members.map(member => (
													<tr
														className='even:bg-white odd:bg-slate-100 cursor-pointer'
														onClick={() => {
															navigate("/admin/members/" + member._id);
														}}>
														<td className='capitalize py-2 px-2'>
															{member.fullName}{" "}
														</td>
														<td className='uppercase py-2 px-2'>
															{member.sliit_id}
														</td>
														<td className='lowercase py-2 px-2'>
															{member.email}
														</td>
														<td className='capitalize py-2 px-2'>
															{member.phone}
														</td>
														<td className='capitalize py-2 px-2'>
															{member.role}
														</td>
													</tr>
											  ))
											: null}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Members;
