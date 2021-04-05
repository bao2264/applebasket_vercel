import { makeAutoObservable, runInAction } from 'mobx'

class Store {
    constructor() {
        makeAutoObservable(this)
    }

    list = []
    picking = false

    get current() {
        const _arr = this.list.filter(v => !v.eat)
        return {
            num: _arr.length,
            total: _arr.reduce((sum, cur) => sum + cur.weight, 0)
        }
    }

    get eated() {
        const _arr = this.list.filter(v => v.eat)
        return {
            num: _arr.length,
            total: _arr.reduce((sum, cur) => sum + cur.weight, 0)
        }
    }

    pickApple = () => {
        this.picking = true
        setTimeout(() => {
            const weight = parseInt(Math.random() * 300 + 100)
            runInAction(() => {
                this.list.push({
                    id: this.list.length ? this.list[this.list.length - 1].id + 1 : 1,
                    eat: false,
                    weight
                })
                this.picking = false
            })
        }, 300);
    }

    eatApple = (id) => {
        const _arr = this.list.map(v => v.id === id ? {...v, eat: true} : {...v})
        runInAction(() => {
            this.list = [..._arr]
        })
    }
}

export default new Store()