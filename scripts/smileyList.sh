ls > list.txt
while read line           
do
name=`echo $line | cut -d'.' -f 1`
title=`echo "${name:0:1}" | tr a-z A-Z`${name:1}
#for i in $name; do B=`echo "${i:0:1}" | tr a-z A-Z`${i:1}; title="$title $B"; done
echo "
li
	span
		img(src=\"/images/smileys/set1/$line\" alt=\"$name\")
	span
		| $title
"   
done < list.txt
rm list.txt
