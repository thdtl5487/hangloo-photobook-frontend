import axios from 'axios';
import { set } from 'date-fns';

class apiloader{

    // 로그인 기능
    loginTest(id, pw){
        axios({
            url: "/photobook/api/certificate.php",
            method: "POST",
            headers: {
                "dataType": 'json',
                "Accept": "application/json, text/javascript, */*; q=0.01",
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            data: {
                id:id,
                password:pw
            }
        }).then((res) =>{
            console.log("API의 로그인 기능 실행");
            console.log(res.data.data.uid);
            localStorage.setItem("uid", res.data.data.uid);
            return res;
        })
    }

    // 접속한 계정의 아동 정보 불러오기
    getChildTest = () =>{
        axios({
            url: "/photobook/api/children.php",
            method: "GET",
            // headers: {
            //     "Content-Type": 'application/json'
            // },
        }).then((res)=>{
            console.log("API의 아동 정보 불러오기 기능 실행");
            const resultList = {
                result : []
            }
            var resData = {
                uid : "",
                name : "",
                birthday : "",
                photo: "",
            }

            for(var i = 0; i < res.data.list.length; i++){
                resData = {
                    uid : res.data.list[i].child_uid,
                    name : res.data.list[i].name,
                    birthday : res.data.list[i].birthday,
                    photo : res.data.list[i].photo
                }

                resultList.result.push(resData);
            }

            console.log(resultList)
            return resultList;
        })
    }

    // 접속한 계정의 게시글 개수 불러오기
    getPostsCount = (startDate, endDate, childNum) => {
        axios({
            url: "/photobook/api/posts_count.php?id=picture&start_date="+startDate+"&end_date="+endDate+"&s_child="+childNum,
            method: "GET",
            headers: {
                "Accept": "application/json, text/javascript, */*; q=0.01",
            },
        }).then((res) => {
            console.log("API의 포토앨범 개수 불러오기 기능 실행, 조회 아동번호 : " + childNum)
            console.log(res);
        })
    }

    // 접속한 계정의 게시글 정보 불러오기 (페이지, 검색시작날짜, 검색종료날짜, 아동번호)
    // 현재 테스트중인 사항, 꼭 url 고칠것 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    getPosts = (page, startDate, endDate, childNum) => {
        axios({
            url: "/photobook/api/notices.php?page="+page+"&id=picture&type=list&is_search=1&start_date="+startDate+"&end_date="+endDate+"&s_child="+childNum,
            method: "GET",
            headers: {
                "Content-Type": 'application/json'
            },
        }).then((res) =>{
            console.log(res);
        })
    }

    // 접속한 계정의 알림장 개수 불러오기
    getNoticesCount = () => {
        axios({
            url: "/photobook/api/notices_count.php",
            method: "GET",
            headers: {
                "Content-Type": 'application/json'
            },
        }).then((res) => {
            console.log(res);
        })
    }

    // 접속한 계정의 알림장 정보 불러오기
    getNotices = (page, startDate, endDate, childNum) => {
        axios({
            url: "/photobook/api/notices.php?page="+page+"&id=note&tab=from&type=list&is_search=1&start_date="+startDate+"&end_date="+endDate+"&s_child="+childNum,
            method: "GET",
            headers: {
                "Content-Type": 'application/json'
            },
        }).then((res)=>{
            console.log(res.data.data.list);
            return res.data.data.list;
        })
    }

    // 접속한 계정의 댓글 개수 불러오기
    getCommentCount = (startDate, endDate, childNum) =>{
        axios({
            url: "/photobook/api/comments.php?start_date="+startDate+"&end_date="+endDate+"&s_child="+childNum,
            method: "GET",
            headers: {
                "Content-Type": 'application/json'
            }
        }).then((res)=>{
            console.log(res);
        })
    }

    // 접속한 계정의 댓글 정보 불러오기
    getComment = (page, startDate, endDate, childNum) =>{
        axios({
            url: "/photobook/api/comments.php?page="+page+"&start_date="+startDate+"&end_date="+endDate+"&s_child="+childNum,
            method: "GET",
            headers: {
                "Content-Type": 'application/json'
            },
        }).then((res)=>{
            console.log(res);
        })
    }

    // 게시글의 사진 리스트 불러오기
    getPhoto = (comm_uid, type) =>{
        axios({
            url: "/photobook/api/photos.php?comm_uid="+comm_uid+"&type="+type,
            method: "GET",       
        }).then((res)=>{
            console.log(res);
        })
    }

    childCheck = () =>{
        axios({
            url: "/photobook/api/children.php",
            method: "GET"
        }).then((res)=>{
            // console.log("API의 아동 정보 불러오기 기능 실행");
            console.log(res);

			var check = 0;

			console.log("비교 대상군 : " + localStorage.getItem("kids_num"))
			for(var i = 0; i<res.data.list.length; i++){
				console.log("for문 실행?")
				console.log(res.data.list[i].child_uuid)
				if(res.data.list[i].child_uid == localStorage.getItem("kids_num")){
					console.log("일치하는 uid 실행")
					check ++;
					console.log("check : "+check);
					break;
				}else{
					
				}

				console.log("for문 종료, check : "+check);
			}
			if(check === 0){
				console.log("check : " + check)
				alert("잘못된 접근입니다.");
				window.history.back();
			}

        }).catch((err)=>{
            console.log(err);
        })
    }
}
export default new apiloader()