<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Home Page</title>
</head>
<body>
<form action="@{/}">
    Filter: <input type="text" name="keyword" id="keyword" size="50" value="${keyword}" required />
    &nbsp;
    <input type="submit" value="Search" />
    &nbsp;
    <input type="button" value="Clear" id="btnClear" onclick="clearSearch()" />
</form></body>
</html>