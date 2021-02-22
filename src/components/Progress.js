import React from 'react'

export const Progress = ({done, name}) => {
	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 300);
	
	return (
        <div className="skill">
            <h2>{name}</h2>
            <div className="progress">
                <div className="progress-done" style={style}>
                    {done}%
                </div>
            </div>
        </div>
	)
}