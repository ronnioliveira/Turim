import React, { Component } from 'react'
import axios from 'axios' //cliente http para fazer conexão com o back

import PageHeader from '../template/pageHeader'
import ClientForm from './clientForm'
import ClientList from './clientList'

const URL = 'http://localhost:2112/api/clients'

//decidi colocar toda a inteligência no componente de cliente
export default class Client extends Component {
    constructor(props) {
        super(props)

        this.state = { nameField: '', list: [] } //seto o estado inicial do objeto

        //O this é baseado em quem chamou a função, que foi o ClientForm, nesse caso, que é externo então o this fica null. Estou amarrando, pois dentro do construtor, o 'this' aponta para a própria classe
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangeAge = this.handleChangeAge.bind(this)
        this.handleFillFormFields = this.handleFillFormFields.bind(this)

        this.handleRemove = this.handleRemove.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)

        this.refresh();
    }

    refresh() {
        this.cleanFields()
        axios.get(`${URL}?sort=-Age`)
            .then(resp => this.setState({ ...this.state, list: resp.data }))
    }

    cleanFields() {
        this.state.nameField = ''
        this.state.ageField = ''
        this.state.IdField = ''
    }

    handleChangeName(e) {
        //sempre que quiser modificar o estado, tem que utilizar o método setState. O campo agora está sendo modificado pelo estado e não mais pelo DOM, então essa linha é muito importante
        this.setState({ ...this.state, nameField: e.target.value }) //pego o estado já existente e associo o nameField ao que vem do evento handleChange
    }

    handleChangeAge(e) {
        //sempre que quiser modificar o estado, tem que utilizar o método setState. O campo agora está sendo modificado pelo estado e não mais pelo DOM, então essa linha é muito importante
        this.setState({ ...this.state, ageField: e.target.value }) //pego o estado já existente e associo o nameField ao que vem do evento handleChange
    }

    handleAdd() {
        const client = { name: this.state.nameField, age: this.state.ageField }

        if (this.state.IdField > 0) {
            client.id = this.state.IdField
            this.handleUpdate(client)
        }else{
        axios.post(URL, { ...client })
            .then(resp => this.refresh())
        }
    }

    handleUpdate(client) {
        axios.put(`${URL}/${client.id}`, { ...client })
            .then(resp => this.refresh())
    }

    handleFillFormFields(client) {
        this.state.nameField = client.Name
        this.state.ageField = client.Age
        this.state.IdField = client.Id
        this.setState(...this.state)
    }

    handleGet() {
        axios.get(URL).then(resp => console.log('PEGOU'))
    }

    handleRemove(client) {
        axios.delete(`${URL}/${client.Id}`)
            .then(resp => this.refresh())
    }

    render() {
        return (
            <div>
                <PageHeader name='Clients' small='Register'></PageHeader>
                <ClientForm
                    nameField={this.state.nameField}
                    ageField={this.state.ageField}
                    handleAdd={this.handleAdd}
                    handleChangeName={this.handleChangeName}
                    handleChangeAge={this.handleChangeAge} />
                <ClientList
                    list={this.state.list}
                    handleRemove={this.handleRemove}
                    handleFillFormFields={this.handleFillFormFields}
                    handleUpdate={this.handleUpdate} />
            </div>
        )
    }
}