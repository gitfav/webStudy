* 假设
```mysql
select * from aa; 
```
+------+------+

| id| name |

+------+------+

|1 | 10|

|1 | 20|

|1 | 20|

|2 | 20|

|3 | 200 |

|3 | 500 |

+------+------+


```mysql
select id,group_concat(name) from aa group by id;  

```
+------+-----------------------------+

| id| group_concat(distinct name) |

+------+-----------------------------+

|1 | 10,20|

|2 | 20 |

|3 | 200,500 |

+------+-----------------------------+

返回一个组的的非NULL值 从 group by 语句中。


或者:

```mysql
select id,group_concat(name order by name desc) from aa group by id; 
```