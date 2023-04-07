import Comment from "../../../Components/comment/Comment";

const index = ({comments}) => {

    return (
        <div>
            <h2 className="text-2xl" > comments route {comments.length} </h2>
            {
               comments.map( comment => <Comment comment={comment} >     </Comment> )
            }
        </div>
    );
};

export default index;

export const getServerSideProps = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=5')
    const data = await res.json();
    return{
        props:{
            comments:data
        }
    }
}