import React from 'react';
import styles from './About.module.css';
import step1 from './step1.svg';
import step2 from './step2.svg';
import step3 from './step3.svg';
import step4 from './step4.svg';
import openSource from './open-source.svg';

function About() {
    return (
        <div className={styles.About}>
            <div className={styles.title}>
                What are we about?
            </div>
            <div className={styles.line}>One day, <b><i>Smitha</i></b> was very tensed about the assignments she has to submit in her college, because <b><i>She could Type Fast, But couldn't Write Fast enough.</i></b></div>
            <div className={styles.line}>On talking about this issue with her friend <b><i>Harry</i></b>, he suggested <b><i>Doc2Pen</i></b> as a solution to her problem.</div>
            <div className={styles.line}><b><i>Are you facing the same problem as Smitha did?</i></b></div>
            <div className={styles.line}>So, let's hear what Harry has to say about <b><i>Doc2Pen.</i></b></div>
            <div className={styles.line}><b><i>Doc2Pen</i></b> converts your <b><i>typed assignments</i></b> into <b><i>handwritten</i></b> ones.</div>

            <div className={styles.steps}>
                <Step
                    img={step1}
                    title="Step 1 : Pick a Page"
                    content="Here, you can choose one either from the wide variety of pages available or you can upload your own institution's letterpad."
                    reverse={false}
                />
                <Step
                    img={step2}
                    title="Step 2 : Pick a Font"
                    content="You can adjust the combination of font-style, font-color and font-size to the one which resembles your handwriting."
                    reverse={true}    
                />
                <Step
                    img={step3}
                    title="Step 3 : Type it"
                    content="Use your fast typing skill to type the assignment in the editor and get it in handwritten form."
                    reverse={false}
                />
                <Step
                    img={step4}
                    title="Step 4 : Download it"
                    content="You can now download/export it in the .png, .jpg, .jpeg or .pdf format and get it printed in order to submit in the college."
                    reverse={true}    
                />
            </div>
            <img src={openSource} alt="Open Source" style={{width: "55vw"}}/>
            <div className={styles.open_source}>
                <div>
                    Now, as Doc2Pen saves a lot of your time, you can now spent your valuable time in learning some practical stuff.
                </div>
                <br />
                <div>
                    And So, here comes the Good News, Doc2pen is an Open Source Project, we welcome your contributions 🙂.
                </div>
            </div>
        </div>
    )
}

function Step(props) {
    return (
        <div className={`${styles.step} ${props.reverse && styles.step_reverse}`}>
            <img src={props.img} alt="Page"/>
            <div className={styles.step_text}>
                <div className={styles.step_title}>
                    {props.title}
                </div>
                <div className={styles.step_content}>
                    {props.content}
                </div>
            </div>
        </div>
    );
}

export default About
