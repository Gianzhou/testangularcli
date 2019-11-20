import { Component } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';

@Component ({
    selector: 'my-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.css']
    
})

export class VideoComponent{
    
    yt_iframe_html : any;
    youtubeUrl = "https://youtu.be/9NnkGy2e4-4";
    constructor(
        private embedService: EmbedVideoService
    ){
        this.yt_iframe_html = this.embedService.embed(this.youtubeUrl);
    }   
}