{/*
	Alerts:
		Alert messages are used to inform users of the status of their action and help them solve any problems that might have occurred.
		Learn more about different alert layouts https://preview.tabler.io/docs/alerts.html
		Learn more about alerts in bootstrap https://getbootstrap.com/docs/5.0/components/alerts/
*/}

import React from 'react';

type Props = {
	className?: string
	dismiss?: () => void
	children?: React.ReactNode
	linkChildren?: React.ReactNode
	icon?: React.ReactNode
	avatar?: string
	background?: string
}

export function Alert(props: Props) {
	return (
		<div className={`alert ${props.dismiss ? 'alert-dismissible' : ''} ${props.background ?? ''} ${props.className ?? ''}`}>
			{!props.dismiss && props.children}
			{
				props.dismiss && (
					<div className='d-flex'>
						{props.icon && <i className={`icon alert-icon ti ti-${props.icon}`} />}
						{props.avatar && <img className='avatar float-start me-3' src={props.avatar} alt='avatar' />}
						<div>
							{props.children}
						</div>
						<a
							className={`btn-close ${props.background ? 'btn-close-white' : ''}`}
							onClick={props.dismiss}
						/>
					</div>
				)
			}
			{props.linkChildren}
		</div>
	)
}