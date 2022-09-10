import React from 'react';
import styles from './Responses.module.css';

const Responses = () => {
    return (
        <>
            <div className='container mt-4 mb-3'>
                <h3>Ideal Responses</h3>
                <hr />
            </div>
            <div className='d-grid col-md-8 mx-auto mt-3'>
                <div className='card border-0'>
                    <div className='card-body'>
                        <form>
                            <div className="row mb-3">
                                <label htmlFor="interactionTitle" className="col-sm-2 col-form-label fw-bold">Interaction Title : </label>
                                <div className="col-sm-10">
                                    {/* <input type="text" className="form-control" id="interactionTitle" /> */}
                                    <div tabIndex="-1" className="btn btn-light disabled placeholder" aria-hidden="true">HR Discussions</div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="candidateName" className="col-sm-2 col-form-label fw-bold">Candidate Name :</label>
                                <div className="col-sm-10">
                                    {/* <input type="text" className="form-control" id="candidateName" /> */}
                                    <div tabIndex="-1" className="btn btn-light disabled placeholder" aria-hidden="true">Bhavya Khurana</div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="candidateId" className="col-sm-2 col-form-label fw-bold">Candidate ID:</label>
                                <div className="col-sm-10">
                                    {/* <input type="number" className="form-control" id="candidateId " /> */}
                                    <div tabIndex="-1" className="btn btn-light disabled placeholder" aria-hidden="true">753196</div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className={`${styles.container} container bg-light p-3 my-5`}>
                <h5>1/4 : Tell me about yourself ?</h5>
                <div className={`${styles.card} card border-0`}>
                    <div className="card-body">
                        <h5 className='card-title'>Ideal Answer</h5>
                        <hr />
                        <div className="alert alert-success" role="alert">
                            Sure! So I've always enjoyed writing and public speaking, even as far back as high school. This led me to
                            pursue writing-related passions—for example in college, where I was an editor for our school newspaper. In
                            addition to writing, I got to learn how to manage a team and how to approach the writing process. After
                            college, I took a job at Acme as a social media manager, writing copy and social content for the company
                            blog, but I raised my hand to work on the communications plan for a product launch, which is where I
                            discovered my interest in product marketing. After switching to a product marketing role and managing the
                            two most successful new product launches last year, I realized I'm excited to take on a new opportunity.
                            I've learned I work best on products that I love and use, and given that I'm a big user of your company’s
                            products, I jumped at the chance to apply when I saw the open posting.
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.container} container bg-light p-3 my-5`}>
                <h5>2/4 : What was your favorite subject in college ? How do you think it will help in your career ?</h5>
                <div className={`${styles.card} card border-0`}>
                    <div className="card-body">
                        <h5 className='card-title'>Ideal Answer</h5>
                        <hr />
                        <div className="alert alert-success" role="alert">
                            My English courses are most interesting and beneficial to me. I love creative and nonfiction writing. Whether I am writing a creative narrative, biographical piece, or poetry, I love to write. The skills I have developed in my English classes have been extremely beneficial in my other coursework, and I have developed tremendously as a writer. I have even published poetry in my college’s literary magazine and served as an assistant editor of the magazine for the past two years.
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.container} container bg-light p-3 my-5`}>
                <h5>3/4 : Could you walk me through the most challenging projects so far in your life ?</h5>
                <div className={`${styles.card} card border-0`}>
                    <div className="card-body">
                        <h5 className='card-title'>Ideal Answer</h5>
                        <hr />
                        <div className="alert alert-success" role="alert">
                            ‘In my previous job at a marketing firm, I have worked on several challenging projects. One time, when I just started at the company, I was asked to work with a small team on a marketing pitch deck for a new client.
                            We got the project because of our reputation and ability to take on the project on short notice. It was a great opportunity for us to show what we were capable of doing in a short amount of time.
                            Then, two weeks before the pitch deck presentation the client requested us to change the entire plan. It turned out that they were unhappy with our first concept and stated that it differed too much from the initial idea that they had in mind.
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.container} container bg-light p-3 my-5`}>
                <h5>4/4 : Do you have any questions for me ?</h5>
                <div className={`${styles.card} card border-0`}>
                    <div className="card-body">
                        <h5 className='card-title'>Ideal Answer</h5>
                        <hr />
                        <div className="alert alert-success" role="alert">
                            Thanks for giving me an opportunity to ask a question.
                            As I am a Fresher and I am not familiar with this post.
                            Can you just give me an idea for this post so I can prepare myself before joining the company?
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Responses;