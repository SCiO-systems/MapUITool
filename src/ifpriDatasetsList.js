import React from "react";
import Picky from "react-picky";
import "./css/picky.css"
import Map from './map';
import DatasetsListCore from "./datasetsListCore";


const style = {
    width: "95%",
    height: "60px",
    display: "block",
    position: "relative"
};


class IfpriDatasetsList extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            value: null,
            arrayValue: [],
        };
        this.selectOption = this.selectOption.bind(this);
        this.selectMultipleOption = this.selectMultipleOption.bind(this);

    }


    selectOption(value) {

        this.setState({value});


    }

    selectMultipleOption(value) {


        Map.showIfpriLayers(value);
        this.setState({arrayValue: value});

    }


    render() {
        const items = [];
        const cropList = DatasetsListCore.ifpriCropArray();


        for (let i = 0; i < cropList.length; i++) {
            let placeholder = cropList[i][1].placeholder;
            let cropID = cropList[i][1].crop;
            let myDiv =
                <div className="col" id={cropID}>
                    <Picky
                        numberDisplayed="0"
                        allSelectedPlaceholder={placeholder}
                        manySelectedPlaceholder={placeholder}
                        placeholder={placeholder}
                        value={this.state.arrayValue}
                        options={cropList[i]}
                        onChange={this.selectMultipleOption}
                        open={false}
                        valueKey="id"
                        labelKey="name"
                        multiple={true}
                        // includeSelectAll={true}
                        includeFilter={false}
                        dropdownHeight={300}

                        />
                </div>;

            items.push(myDiv)
        }

        return (

            <div  className="container" >
                <div className="row" style={style}>
                    {items}
                </div>
            </div>


        );

    }
}


export default IfpriDatasetsList;
