package com.app.download;


public class MD5DownloadTaskIDCreator implements DownloadTaskIDCreator {

	@Override
	public String createId(DownloadTask task) {
		return MD5.getMD5(task.getUrl());
	}

}
