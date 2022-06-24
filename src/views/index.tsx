import { ref } from 'vue'
import '@/assets/style/index.scss'
import { postname, getname } from '@/request'

export default {
    name: 'HelloWorld',
    // props: {
        // msg: String
    // },
    data() {
        return {
            count: ref(0),
            msg: '',
            list: [1, 2, 3, 4, 5],
            st: false
        }
    },
    methods: {
        onClick: function () {
            this.count++
            const params = {
                a: 1,
                b: 2
            }
            const headers = {
                xx: 'xx'
            }
            getname({ params, headers }).then((res) => {
                console.log(res)
            })
            postname({ params, headers })
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    },
    render() {
        return (
            <>
                <h1>
                    {this.msg}
                    <p>22</p>
                </h1>
                {this.list.map((item: object) => {
                    return <p>{item}</p>
                })}
                {this.st ? <p>1</p> : <p>2</p>}
                <a-button type="primary" onClick={this.onClick}>
                    count is: {this.count}
                </a-button>
                <a-typography-link href="https://antdv.com" target="_blank">
                    Ant Design Vue (Link)
                </a-typography-link>
            </>
        )
    }
}
