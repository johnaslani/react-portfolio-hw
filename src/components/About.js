import pic from "../assets/images/AfshinAslani.png";

function About() {
  return (
    <section id="aboutMe">
      <h2>About Me</h2>
      <figure>
        <img src={pic} />
        {/* <figcaption>John Aslani</figcaption> */}
      </figure>
      <div className="aboutMe">
        <p className="highlighted-text">
          I am Sr. Medical Data Scientists at Lab 126, Amazon. I love to expand
          debth of my technical skills. This is why I joined coding bootcamp. 
        </p>
        <p>15+ years of progressive experience in healthcare data and information
          science, representing the responsibility to support both external
          clients and internal management.
        </p>
        <p>10+ years of consulting experience in
          research methodology and healthcare data analytics. 7 years of clinical
          experience in different settings including hospitals, clinics and health
          centers. 
        </p>
        <p>• Expertise in large-scale healthcare databases and survey
          analysis. 
        </p>
        <p> • Broad understanding of healthcare data including clinical
          data, Biomedical Informatics, Claims, Quality metrics, Health Outcomes,
          and Health Services Research.
        </p>
        <p>• Project leadership abilities, personnel
          management skills, quantitative healthcare and biomedical analytics, and
          strong expertise in large-scale Real-World-Data (RWD).
        </p>
        <p> • Track record of
          carrying out research ideas from concept to execution to publication and
          beyond.
        </p>
        
        <p> • Capable of analyzing problems and designing recommendations
          including workflows processes and procedures.
        </p>
      </div>
    </section>
  );
}

export default About;
