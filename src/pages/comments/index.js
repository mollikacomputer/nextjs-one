const index = ({comments}) => {
console.log(comments);
    return (
        <div>
            <h2 className="text-2xl" > comments route</h2>

        </div>
    );
};

export default index;

export const getServerSideProps = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/comments?_limits=50')
    const data = await res.json();
    return{
        props:{
            comments:data
        }
    }
}