import React from 'react';
import HpMenuItem from "../hp-menu-item/hp-menu-item.component";
import "./style.scss"

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: "Login",
                    subtitle: "Login now!",
                    id: 1
                },
                {
                    title: "About",
                    subtitle: "About Stuff",
                    id: 2
                },
                {
                    title: "Why Us?",
                    subtitle: "All about why you can use us",
                    id: 3
                },
                {
                    title: "Something Else",
                    subtitle: "Something Else",
                    id: 4
                },
                {
                    title: "Even Different Stuff",
                    subtitle: "Even more different",
                    id: 5
                },
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({ id, ...otherProps }) => (
                    <HpMenuItem key={id} {...otherProps} />
                ))}
            </div>
        )
    }
}

export default Directory;