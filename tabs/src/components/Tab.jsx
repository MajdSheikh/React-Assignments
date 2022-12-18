import React, {useState} from 'react'

const Tab = (props) => {

  // selectedTab is saved in state, used to keep data updated when it is changed from the web (by clicking the tabs)
  // we map through the items, it takes the "tab" which represent represent that tabdata (as in the app.js), and the key 
  // which is necessary to be able to identify which tab is clicked on
  // "tab === selectedTab" is a ternary operator that is used to apply the styling, because the style changes when the tab is clicked on and not clicked on
  // onClick function takes the state of the tab that stores the data of the tabs "(props.items[i]"
  const [ selectedTab, setSelectedTab ] = useState("");
  return (
        <div>
          <div className="firstComp">
          { props.items.map((tab, i) => (
            <button
                className={ tab === selectedTab ? "selected": "unselected" } 
                key={i} 
                onClick={ () => setSelectedTab(props.items[i]) }>{ tab.label }</button>
        ))}
          </div>

            <div className="secondComp">
                { selectedTab.content }
            </div>
        </div>
  )
}

export default Tab

