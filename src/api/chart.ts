import axios from "axios";


const instance = axios.create({
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0',
    }
)

export const chartAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    followUsers(userId: number) {
        return instance.post(`/follow/${userId}`, {})
        // .then(response => {
        //     return response.data
        // })
    },
    unfollowUsers(userId: number) {
        return instance.delete(`/follow/${userId}`)
        // .then(response => {
        //     return response.data
        // })
    }
}
