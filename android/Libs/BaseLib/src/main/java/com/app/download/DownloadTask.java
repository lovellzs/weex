package com.app.download;

import java.io.Serializable;
import java.util.List;

public class DownloadTask implements Serializable {

	private static final long serialVersionUID = -4490292293662105870L;
	public static final String ID = "_id";
	public static final String URL = "a";
	public static final String MIMETYPE = "b";
	public static final String SAVEPATH = "c";
	public static final String FINISHEDSIZE = "d";
	public static final String TOTALSIZE = "e";
	public static final String NAME = "f";
	public static final String STATUS = "g";
	
	public static final int STATUS_PENDDING = 1 << 0;
	
	public static final int STATUS_RUNNING = 1 << 1;
	
	public static final int STATUS_PAUSED = 1 << 2;
	
	public static final int STATUS_CANCELED = 1 << 3;
	
	public static final int STATUS_FINISHED = 1 << 4;
	
	public static final int STATUS_ERROR = 1 << 5;
	
	private static int FLAG=-1;
	
	private int flag=-1;

	private String id;
	
	private String name;
	
	private String url;
	
	private String iconUrl;
	
	private int iconResourceId=-1;
	
	private List<String> urls;
	
	private String mimeType;
	
	private String downloadSavePath;
	
	private long downloadFinishedSize=0;
	
	private long downloadTotalSize=0;
	
	// @Transparent no need to persist
	private long downloadSpeed=0;
	
	private int status=STATUS_PENDDING;
	//是否需要在通知栏显示
	private boolean needNotify=false;
	//下载完成后自动打开安装界面
	private boolean autoOpenInstall=false;
	
	public DownloadTask() {
		downloadFinishedSize = 0;
		downloadTotalSize = 0;
		status = STATUS_PENDDING;
	}

	@Override
	public boolean equals(Object o) {
		if(o == null) {
			return false;
		}
		if(!(o instanceof DownloadTask)) {
			return false;
		}
		DownloadTask task = (DownloadTask) o;
		if(this.name == null || this.downloadSavePath == null) {
			return this.url.equals(task.url);
		}
		return this.name.equals(task.name) && this.url.equals(task.url) && this.downloadSavePath.equals(task.downloadSavePath);
	}

	@Override
	public int hashCode() {
		int code = name == null ? 0 : name.hashCode();
		code += url.hashCode();
		return code;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getMimeType() {
		return mimeType;
	}

	public void setMimeType(String mimeType) {
		this.mimeType = mimeType;
	}

	public String getDownloadSavePath() {
		return downloadSavePath;
	}

	public void setDownloadSavePath(String downloadSavePath) {
		this.downloadSavePath = downloadSavePath;
	}

	public long getDownloadFinishedSize() {
		return downloadFinishedSize;
	}

	public void setDownloadFinishedSize(long downloadFinishedSize) {
		this.downloadFinishedSize = downloadFinishedSize;
	}

	public long getDownloadTotalSize() {
		return downloadTotalSize;
	}

	public void setDownloadTotalSize(long downloadTotalSize) {
		this.downloadTotalSize = downloadTotalSize;
	}

	public long getDownloadSpeed() {
		return downloadSpeed;
	}

	public void setDownloadSpeed(long downloadSpeed) {
		this.downloadSpeed = downloadSpeed;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}
	//内存唯一标识
	public int getFlag(){
		if(flag==-1){
			FLAG++;
			flag = FLAG;
		}
		return flag;
	}
	
	public boolean isNeedNotify() {
		return needNotify;
	}
	
	public void setNeedNotify(boolean needNotify) {
		this.needNotify = needNotify;
	}
	
	public List<String> getUrls() {
		return urls;
	}
	
	public void setUrls(List<String> urls) {
		this.urls = urls;
		getNextUrl();//获取到一个URL
	}
	
	public String getNextUrl(){
		String turl="";
		if(urls!=null&&urls.size()>0){
			int last=urls.size()-1;
			turl = urls.get(last);
			urls.remove(last);
			this.url = turl;
		}
		return turl;
	}
	
	public String getIconUrl() {
		return iconUrl;
	}

	public void setIconUrl(String iconUrl) {
		this.iconUrl = iconUrl;
	}
	
	public boolean isAutoOpenInstall() {
		return autoOpenInstall;
	}

	public void setAutoOpenInstall(boolean autoOpenInstall) {
		this.autoOpenInstall = autoOpenInstall;
	}
	
	public int getIconResourceId() {
		return iconResourceId;
	}

	public void setIconResourceId(int iconResourceId) {
		this.iconResourceId = iconResourceId;
	}
}
