-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-10-2023 a las 22:27:23
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `blockchains`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_transaccion`
--

CREATE TABLE `detalle_transaccion` (
  `id_detalle` int(11) NOT NULL,
  `id_transaccion` int(11) NOT NULL,
  `id_producto` int(20) NOT NULL,
  `cantidad` int(20) NOT NULL,
  `precio_unitario` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id` int(20) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `descripcion` text NOT NULL,
  `precio` float NOT NULL,
  `stock` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id`, `nombre`, `descripcion`, `precio`, `stock`) VALUES
(1, 'Cuadernos grapados', 'Cuadernos de rayas engrapados.', 0.3982, 16),
(2, 'Lapiceros (rojo, negro y azul)', 'Lapiceros bic de diferentes colores.', 0.0919, 39),
(3, 'Cosedora', 'Maquina para coser.', 6.5246, 2),
(4, 'Ganchos para cosedoras', 'ganchos de repuesto para cosedora.', 0.9373, 48),
(5, 'Block iris', 'Block de colores.', 0.5636, 12),
(6, 'Folder tamaño carta', 'Folder de colores tamaño carta.', 0.0919, 4),
(7, 'Recibo de caja menor', 'Recibos comerciales.', 0.0919, 25),
(8, 'Lapiz N2', 'Lapiz para dibujar N2', 0.1715, 49),
(9, 'Caja de colores', 'Caja de 24 colores.', 0.9373, 21),
(10, 'Bisturi', 'bisturi para cortar diferentes tipos de papel o carton.', 1.1824, 19),
(11, 'Cinta de enmascarar', 'Cinta para enmascarar.', 0.2818, 21),
(12, 'Cuadernos argollados', 'Cuadernos de rayas argollados.', 0.3737, 22),
(13, 'Block rayado carta y oficio', 'Block de notas tamaño carta y tamaño oficio.', 0.1532, 41),
(14, 'Grapadora de uno o dos huecos', 'Grapadora mediana.', 0.9373, 17),
(15, 'Tablero de corcho', 'Tablero de corte.', 2.3832, 10),
(16, 'Marcadores borrables para tablero', 'Plumones para pizarra.', 0.4717, 20),
(17, 'Tizas para tablero', 'Tiza para pizarra.', 0.2818, 17),
(18, 'Borrados para marcadores', 'Borrador para pizarra.', 1.1273, 19),
(19, 'Papel carta para impresora', 'Papel bond color blanco.', 1.2253, 5),
(20, 'Block de dibujo', 'Block en blanco tamaño carta y tamaño oficio.', 0.2818, 15),
(21, 'Bitacoras', 'Bitacoras de anotaciones.', 0.4717, 23),
(22, 'Marcadores de vinilo', 'Marcadores.', 0.5636, 13),
(23, 'Micropuntas de colores', 'Micro puntas de respuesto.', 0.7535, 13),
(24, 'Portaminas', 'Porta minas de repuesto.', 0.6004, 15),
(25, 'Lapiz puntaminas', 'Lapiz puntamina sencillo', 0.5636, 12),
(40, 'Papel', 'nose', 7, 14),
(44, 'Libreta', 'para dibujar', 1.23, 12);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `transaccion`
--

CREATE TABLE `transaccion` (
  `id` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `correo` varchar(255) NOT NULL,
  `codigo` int(6) NOT NULL,
  `rol` enum('administrador','usuario') NOT NULL DEFAULT 'usuario',
  `contrasenia_hash` varchar(60) NOT NULL,
  `imagen` blob DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `correo`, `codigo`, `rol`, `contrasenia_hash`, `imagen`) VALUES
(1, 'Jimy', 'js@gmail.com', 0, 'administrador', 'xaxa', NULL),
(2, 'Matias', 's@gmail.com', 123456, 'usuario', '$2b$10$.h/l8QJ0Xg9/m9QWPRmPEeq6235wIspYxJMpqqMbD.Abcxukk2q/6', NULL),
(3, 'karla', 'ka@mail.com', 123456, 'usuario', '$2b$10$aoPZZaTWzChfNP4JqaKjXOccaHR9/BZ...4/965xjcikLZNOTt8ha', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `detalle_transaccion`
--
ALTER TABLE `detalle_transaccion`
  ADD PRIMARY KEY (`id_detalle`),
  ADD KEY `id_transaccion` (`id_transaccion`),
  ADD KEY `id_producto` (`id_producto`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `transaccion`
--
ALTER TABLE `transaccion`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `detalle_transaccion`
--
ALTER TABLE `detalle_transaccion`
  MODIFY `id_detalle` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT de la tabla `transaccion`
--
ALTER TABLE `transaccion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `detalle_transaccion`
--
ALTER TABLE `detalle_transaccion`
  ADD CONSTRAINT `detalle_transaccion_ibfk_1` FOREIGN KEY (`id_transaccion`) REFERENCES `transaccion` (`id`),
  ADD CONSTRAINT `detalle_transaccion_ibfk_2` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
