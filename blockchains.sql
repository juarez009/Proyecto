-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-09-2023 a las 00:32:58
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
  `precio` decimal(10,2) NOT NULL,
  `stock` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id`, `nombre`, `descripcion`, `precio`, `stock`) VALUES
('1', 'Cuadernos grapados', '21', 'Cuadernos de rayas engrapados.', '0.65'),
('2', 'Lapiceros (rojo, negro y azul)', '45', 'Lapiceros bic de diferentes colores.', '0.25'),
('3', 'Cosedora', '10', 'Maquina para coser.', '10.65'),
('4', 'Ganchos para cosedoras', '50', 'ganchos de repuesto para cosedora.', '2.50'),
('5', 'Block iris', '15', 'Block de colores.', '1.50'),
('6', 'Folder tamaño carta', '10', 'Folder de colores tamaño carta.', '0.25'),
('7', 'Recibo de caja menor', '25', 'Recibos comerciales.', '0.25'),
('8', 'Lapiz N2', '50', 'Lapiz para dibujar N2', '0.45'),
('9', 'Caja de colores', '22', 'Caja de 24 colores.', '2.50'),
('10', 'Bisturi', '19', 'bisturi para cortar diferentes tipos de papel o carton.', '3.15'),
('11', 'Cinta de enmascarar', '21', 'Cinta para enmascarar.', '0.75'),
('12', 'Cuadernos argollados', '22', 'Cuadernos de rayas argollados.', '1.00'),
('13', 'Block rayado carta y oficio', '41', 'Block de notas tamaño carta y tamaño oficio.', '0.40'),
('14', 'Grapadora de uno o dos huecos', '17', 'Grapadora mediana.', '2.50'),
('15', 'Tablero de corcho', '11', 'Tablero de corte.', '6.35'),
('16', 'Marcadores borrables para tablero', '20', 'Plumones para pizarra.', '1.25'),
('17', 'Tizas para tablero', '17', 'Tiza para pizarra.', '0.75'),
('18', 'Borrados para marcadores', '19', 'Borrador para pizarra.', '3.00'),
('19', 'Papel carta para impresora', '5', 'Papel bond color blanco.', '0.01'),
('20', 'Block de dibujo', '15', 'Block en blanco tamaño carta y tamaño oficio.', '0.75'),
('21', 'Bitacoras', '23', 'Bitacoras de anotaciones.', '1.25'),
('22', 'Marcadores de vinilo', '13', 'Marcadores.', '1.50'),
('23', 'Micropuntas de colores', '13', 'Micro puntas de respuesto.', '2.00'),
('24', 'Portaminas', '15', 'Porta minas de repuesto.', '1.60'),
('25', 'Lapiz puntaminas', '12', 'Lapiz puntamina sencillo', '1.50');

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
(2, 'Matias', 's@gmail.com', 123456, 'usuario', '$2b$10$.h/l8QJ0Xg9/m9QWPRmPEeq6235wIspYxJMpqqMbD.Abcxukk2q/6', NULL);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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
