import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGroupsDetails } from "../../../actions/student.action";
import Menu from "../../../components/AdminMenu";
import { useNavigate } from "react-router-dom";

function Groups() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const groups = useSelector(state => state.students);
	console.log("This is Groups:", groups);
	useEffect(() => {
		dispatch(getAllGroupsDetails());
	}, []);
	return (
		<div>
			<div className='w-screen h-screen grid grid-cols-12 bg-bk-white'>
				<div className=''>
					<Menu status='groups' />
				</div>
				<div className='col-span-11 my-auto'>
					<div className='h-full w-full'>
						<div className='mx-auto bg-white w-[70.5rem] drop-shadow-xl rounded-xl mt-0 h-[33rem]'>
							<h2 className='text-xl font-bold ml-5 pt-2 capitalize'>Groups</h2>
							<div className='overflow-auto h-[25rem] mx-16 mt-5'>
								<table className='border-collapse w-full '>
									<thead>
										<tr>
											<th className='py-2 px-2 uppercase bg-white text-left sticky top-0 z-1'>
												id
											</th>
											<th className='py-2 px-2 uppercase bg-white text-left sticky top-0 z-1'>
												leader
											</th>
											<th className='py-2 px-2 uppercase bg-white text-left sticky top-0 z-1'>
												supervisor
											</th>
											<th className='py-2 px-2 uppercase bg-white text-left sticky top-0 z-1'>
												co-supervisor
											</th>
											<th className='py-2 px-2 uppercase bg-white text-left sticky top-0 z-1'>
												panel
											</th>
										</tr>
									</thead>
									<tbody>
										{groups.groups.length > 0
											? groups.groups.map(group => (
													<tr
														className='even:bg-white odd:bg-slate-100 cursor-pointer'
														onClick={() => {
															navigate("/admin/view-groups/" + group._id);
														}}>
														<td className='capitalize py-2 px-2'>
															{group.username}
														</td>
														<td className='uppercase py-2 px-2'>
															{group.students.leader.sliit_id}
														</td>
														<td className='uppercase py-2 px-2'>
															{group.supervisor}
														</td>
														<td className='uppercase py-2 px-2'>
															{group.coSupervisor}
														</td>
														<td className='uppercase py-2 px-2'>
															{group.panel}
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

export default Groups;
