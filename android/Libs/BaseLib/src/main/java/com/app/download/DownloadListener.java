package com.app.download;

public interface DownloadListener {
	
	public void onDownloadStart(DownloadTask task);
	
	public void onDownloadUpdated(DownloadTask task);
	
	public void onDownloadPaused(DownloadTask task);
	
	public void onDownloadResumed(DownloadTask task);
	
	public void onDownloadSuccessed(DownloadTask task);
	
	public void onDownloadCanceled(DownloadTask task);
	
	public void onDownloadFailed(DownloadTask task);
	
	public void onDownloadRetry(DownloadTask task);
}