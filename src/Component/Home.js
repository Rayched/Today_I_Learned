
function Home(){
    return (
        <div>
            <main className="Main_Wrapper">
                <p>
                    오늘 하루 동안 내가 공부한 것과 <br/>
                    공부하면서 느꼈던 감상 등을 기록으로 남겨두자.
                </p>
            </main>
            <aside className="SideBar">
                <ul>
                    <h5>HTML</h5>
                </ul>
                <ul>
                    <h5>CSS</h5>
                </ul>
                <ul>
                    <h5>JavaScript</h5>
                </ul>
                <ul>
                    <h5>ReactJS</h5>
                </ul>
            </aside>
        </div>
    );
}

export default Home;