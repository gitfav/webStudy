<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
header('Content-type:text/html;charset=utf-8');
class Delcache extends CI_Controller {

	public function index()
	{
		$this->load->library('common/cache',$this->config->item('redis_config_alliyun'));
		$this->cache->getRedis($this->config->item('redis_config_aliyun'));
        if ($this->cache->link === true) {
        	$electronic_brand =$this->cache->_redis->keys('electronic_brand_*');
        	$Abrand           =$this->cache->_redis->keys('onebrand_*');
        	$AbrandNum        =$this->cache->_redis->keys('onebrandNum_*');
        	//noticeTexts_* 具体文章资讯		noticeTexts 页脚的父子级关系		typeNotice_* 页脚文章
        	$r_eleb = false;
        	$r_ab   = false;
        	$r_abn  = false;
        	!empty($electronic_brand)	&&$r_eleb = $this->cache->_redis->del($electronic_brand);
        	!empty($Abrand)				&&$r_ab = $this->cache->_redis->del($Abrand);
        	!empty($AbrandNum)			&&$r_abn = $this->cache->_redis->del($AbrandNum);
        	$this->dealresult($r_eleb,'electronic_brand_');
        	$this->dealresult($r_ab,'onebrand_');
        	$this->dealresult($r_abn,'onebrandNum_');
		}else{
			echo "redis连接失败！";
		}
	}
	private function dealresult($result,$name){
        if ($result===false) {
        	echo $name.'*删除失败  没有此key，或删除失败<br>';
        }else{
        	echo $name.'*删除成功  ，个数：'.$result.'<br>';
        }
	}
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */