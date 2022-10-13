import { connect } from "react-redux";
import User from "../user/User";
import style from './listUser.module.scss'
// vertical and horizontal
 function ListUser ({getView,listUser = []}) {
  
    const handleView = () => {
        return getView === 'horizontal'? style.horizontal: style.vertical
   }
    return (<div className={style.listUser + ' ' + handleView()}>
        {listUser.length > 0 ? listUser.map((user, index) => {
            const baseInfo = {
                displayName: user.displayName,
                phone: user.phone,
                email: user.email,
            }
            const listCate = user.categoriesCollection.items;
            const skills = user.skillsCollection.items.map(value => {
                return {
                    id: value.sys.id,
                    displayName: value.displayName
                }
            })
            const listService = user.servicesCollection.items.map(value => {
                return {
                    id: value.sys.id,
                    name: value.name,
                }
            })
            const status = user.status;
            return (<User
                key={index}
                avatar={user.avatarUrl}
                baseInfo={baseInfo}
                listCate={listCate}
                skills = {skills}
                listService={listService}
                status = {status}
            ></User>)
        })
        :
        <h1>No data to view. Please query exacly the key work and do it again</h1>
        }
    </div>)
}

const mapState = (state) => {
    return {
        getView: state.view,
    }
}
export default connect(mapState)(ListUser)