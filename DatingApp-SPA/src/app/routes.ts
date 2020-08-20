import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './guards/auth.guard';
import { Component } from '@angular/core';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberDetailresolvers } from './_resolvers/member-detail.resolvers';
import { MemberListresolvers } from './_resolvers/member-list.resolvers';


export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'members', component: MemberListComponent, resolve: { users: MemberListresolvers } },
            { path: 'members/:id', component: MemberDetailComponent, resolve: { user: MemberDetailresolvers } },
            { path: 'messages', component: MessagesComponent },
            { path: 'lists', component: ListsComponent },
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
