import React from 'react';

class Accordion extends React.Component {
    static defaultProps = {
        sections: []
    };

    state = {
        currentTabIndex: -1
    };

    handleButtonClick = (index) => {
        console.log('Button was clicked', index)
        this.setState({ currentTabIndex: index })
    }

    renderSections() {
        if(this.props.sections.length){
            return this.props.sections.map((section, index) => (
                <li>
                    <button key={index} onClick={() => this.handleButtonClick(index)}>
                        {section.title}
                    </button>
                    {this.renderContent(index)}
                </li>
            ))
        }else{
            return (<li></li>)
        }
        
    }

    renderContent(index){
        const currentTab = this.state.currentTabIndex;
        if(currentTab === index){
            return (
                <p>
                    {!!(currentTab === index) && this.props.sections[index].content}
                </p>
            )
        }else{
            return
        }
    }

    render(){
        return (
            <ul>
                {this.renderSections()}
            </ul>
        )
    }

}

export default Accordion;