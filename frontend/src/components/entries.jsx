import React, { Component } from 'react';
import { getEntries } from '../services/entryService';

class Entries extends Component {
    state = { entries : ''};

    async componentDidMount() {
        await this.populateEntries();
    }

    async populateEntries() {
        
        try {
            const { data: entries } = await getEntries().then(function (response) { return response }).catch(function (error) { console.log(error) });
            this.setState({ entries });
        } catch (ex) {console.log(ex)}
    }

    render() {


        function renderTable(entries) {
            return (
            <section className="bg-secondary py-4">
                <div className="container-fluid">
                    <div className="row text-center text-white">
                        <div className="col m-4">
                            <h1 className="display-4 mb-4">Entries</h1>
                            <div className="underline mb-4"></div>
                            <h3 >Our Entries</h3>
                        </div>
                    </div>

                    <div className="row text-center">
                        <table class="table table-hover table-dark">
                            <thead>
                                <tr>
                                <th scope="col">#id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">PhoneNumber</th>
                                <th scope="col">Content</th>
                                </tr>
                            </thead>
                            <tbody>
                                {entries.map((entry) => (
                                    <tr>
                                        <th scope="row">{entry.id}</th>
                                        <td>{entry.name}</td>
                                        <td>{entry.email}</td>
                                        <td>{entry.phoneNumber}</td>
                                        <td>{entry.content}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            );
        }

        if (this.state.entries !=='') return renderTable(this.state.entries);
        else return <p>...Loading</p>;

    }
}
export default Entries;
