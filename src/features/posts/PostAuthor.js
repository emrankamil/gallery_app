import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers, getUsersError, getUsersStatus, fetchUsers } from "../users/userSlice";
import { useEffect } from "react";

const PostAuthor = ({ userId }) => {

    const dispatch = useDispatch()

    const users = useSelector(selectAllUsers)
    const usersStatus = useSelector(getUsersStatus)
    const error = useSelector(getUsersError)
    
    // useEffect(() => {
    //     if (usersStatus === 'idle') {
    //         dispatch(fetchUsers())
    //     }
    // }, [usersStatus, dispatch])

    const author = users.find(user => user.id === userId)
    return <span>by {author ? author.firstname : 'Unknown author'}</span>
}

export default PostAuthor