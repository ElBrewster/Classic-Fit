import React from "react";
import "./PatternNotes.scss";

export default function PatternNotes({pattern, checkForComments, addUserComments}) {

    console.log("from :", pattern)
//^^ keeping this log here for documentation purposes    
    function showComments(){
        const comments = checkForComments(pattern.id);
        if(comments){
            comments.map(comment => {
            return <p>{comment.note}</p>
            })
        }
        console.log(comments);
    }
    return(
        <div className="right-info">
            <section>
                <h2>This is static for now ;-;&nbsp;</h2>
                <div>
                    {showComments()}
                </div>
                <p>All user's comments on the pattern use go here. </p>
                <p>We are cataloguing the accumulated data of all user's fit notes.</p>
            </section>
        </div>
    )
}