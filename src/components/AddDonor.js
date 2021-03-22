import React, { Component } from 'react'

export default class AddDonor extends Component {
    render() {
        return (
            <form>
                <div>
                    <label>Name</label>
                    <input type="text" placeholder="Enter Name" />
                </div>
                <div>
                    <label>Blood Group</label>
                    <input type="text" placeholder="Enter Blood Group" />
                </div>
                <div>
                    <label>Contact Number</label>
                    <input type="text" placeholder="Enter Contact Number" />
                </div>
                <div>
                    <label>Last Donation Date</label>
                    <input type="text" placeholder="Enter Last Donation Date" />
                </div>

                <input type="submit" value="Save Task" />

            </form>
        )
    }
}
