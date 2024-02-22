function Skill({ skill }) {
    return (
        <div className="col-6 col-md-4">
            <div className="text-center">
                <img src={skill} alt="tech stack" className="logo img-fluid" />
            </div>
        </div>
    );
}

export default Skill;
