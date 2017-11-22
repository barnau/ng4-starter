import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { ISession } from '../../shared/event.model';
import { AuthService } from '../../../user/auth.service';
import { VoterService } from '../voter.service';


@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit, OnChanges {
  
  @Input() sessions: ISession[];
  // so filterBy gets passed in and when it changes ngOnChanges kicks off
  @Input() filterBy: string; 
  @Input() sortBy: string;
  @Input() voted
  @Output() vote = new EventEmitter();
  visibleSessions: ISession[] = [];

  constructor(private auth: AuthService, private voterService: VoterService) { }


  ngOnChanges(): void {
    if(this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name' ? this.visibleSessions.sort
      (sortByNameAsc) : this.visibleSessions.sort(sortByVotesDesc)

    }
  }

  filterSessions(filterBy: string) {
    if(filterBy === 'all') {
      // slice(0) essentially makes an Angular.Copy so it isn't pointing to our original sessions
      this.visibleSessions = this.sessions.slice(0)
    } else {
      this.visibleSessions = this.sessions.filter(session => {
        return session.level.toLocaleLowerCase() === filterBy;
      })
    }
  }

  ngOnInit() {
  }

  toggleVote(session: ISession) {
    if(this.userHasVoted(session)) {
      this.voterService.deleteVoter(session, this.auth.currentUser.userName)
    } else {
      this.voterService.addVoter(session, this.auth.currentUser.userName)
    }
    if(this.sortBy === 'votes')
      this.visibleSessions.sort(sortByVotesDesc)
  }

  userHasVoted(session: ISession) {
    return this.voterService.userHasVoted(session, this.auth.currentUser.userName);
  }

}

function sortByNameAsc(s1: ISession, s2: ISession) {
  if(s1.name > s2.name) return 1;
  if(s1.name === s2.name) return 0;
  else return -1;
}

function sortByVotesDesc(s1: ISession, s2: ISession) {
  return -(s1.voters.length - s2.voters.length);
}