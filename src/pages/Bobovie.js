import React, { Component } from 'react';
import Data from "../Data/Bobovie.json";

class Home extends Component {
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Продукт</th>
                            <th>Калории, ккал</th>
                            <th>Углеводы, г</th>
                            <th>Жиры, г</th>
                            <th>Белки, г</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        Data.map (record => {
                            return(
                                <tr>
                                    <td width={500}>{record.Title}</td>
                                    <td width={120}>{record.Calories}</td>
                                    <td width={120}>{record.Carbohydrates}</td>
                                    <td width={120}>{record.Fats}</td>
                                    <td width={120}>{record.Proteins}</td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Home;