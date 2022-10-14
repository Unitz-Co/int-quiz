import { connect } from "react-redux";
import Avatar from "./avatar/Avatar";
import BaseInfo from "./baseinfo/BaseInfo";
import ListCategory from "./categories/ListCategory";
import ListService from "./services/ListService";
import Skills from "./skills/Skills";
import Status from "./status/Status";
import style from './user.module.scss'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

// vertical and horizontal

function User({getView,avatar, baseInfo, listCate, skills, listService, status}) {
   const handleView = () => {
        return getView === 'horizontal'? style.horizontal: style.vertical
   }
    return (<div className={style.user + ' ' + handleView()}>
        <Avatar title={avatar?.title} url = {avatar?.url} ></Avatar>
        <BaseInfo baseInfo={baseInfo}></BaseInfo>
        <ListCategory listCate={listCate}></ListCategory>
        <Skills skills={skills}></Skills>
        <ListService listService={listService}></ListService>
        <Status status={status}></Status>
    </div>)
}

const mapState = (state) => {
    return {
        getView: state.view,
    }
}
export default connect(mapState)(User)