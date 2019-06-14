import React from "react";
import DatasetsListCore from "./datasetsListCore";
import Map from "./map";


class GenesysDatasetsList2 extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedOption: ''
        };
        this.radioChange = this.radioChange.bind(this);
    }

    radioChange(e) {
        this.setState({
            selectedOption: e.currentTarget.value
        });
        Map.showGenesysLayers(e.currentTarget.value);

    }

    render() {
        const items = [];
        const genesysList = DatasetsListCore.genesysCropArray();


        for (let i = 0; i < genesysList.length; i++) {

            let cropID = genesysList[i].crop;
            let name = genesysList[i].name;

            let myDiv =
                <div>

                    <input type="radio"
                           value={cropID}
                           checked={this.state.selectedOption === cropID}
                           onChange={this.radioChange}/>{name}<br/>
                </div>;

            items.push(myDiv)
        }

        return (
            <div>

                {items}


            </div>
        );
    }
}


export default GenesysDatasetsList2;
